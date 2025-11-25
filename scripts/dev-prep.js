#!/usr/bin/env node
// Small helper to free port 3000 and remove Next dev lock file before starting dev server.
// Safe: attempts graceful kills first, falls back to force.

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  try {
    return execSync(cmd, { stdio: 'pipe' }).toString().trim();
  } catch (e) {
    return '';
  }
}

console.log('dev-prep: checking for processes on port 3000...');
// Try to free port 3000 up to a few times
function findPids() {
  let p = run("lsof -ti:3000");
  if (p) return p;
  p = run("ss -ltnp 'sport = :3000' | awk -F'pid=' '/pid=/ {print $2}' | cut -d',' -f1");
  return p;
}

let attempts = 0;
const maxAttempts = 6;

function attemptKill() {
  attempts++;
  const p = findPids();
  if (!p) {
    console.log('dev-prep: no process found on port 3000');
    cleanLockAndExit();
    return;
  }

  console.log(`dev-prep: found PID(s) on port 3000: ${p}`);
  // send TERM
  run(`kill ${p}`);
  console.log('dev-prep: sent SIGTERM, waiting 1s...');

  setTimeout(() => {
    const still = findPids();
    if (!still) {
      console.log('dev-prep: port is now free');
      cleanLockAndExit();
      return;
    }

    if (attempts < maxAttempts) {
      console.log(`dev-prep: still present (${still}), attempt ${attempts}/${maxAttempts} - forcing kill`);
      run(`kill -9 ${still}`);
      setTimeout(attemptKill, 500);
      return;
    }

    console.log(`dev-prep: failed to free port after ${maxAttempts} attempts, continuing anyway`);
    cleanLockAndExit();
  }, 1000);
}

attemptKill();

function cleanLockAndExit() {
  try {
    const lockPath = path.join(__dirname, '..', '.next', 'dev', 'lock');
    if (fs.existsSync(lockPath)) {
      fs.unlinkSync(lockPath);
      console.log('dev-prep: removed stale Next dev lock');
    }
  } catch (e) {
    // ignore
  }
  process.exit(0);
}
