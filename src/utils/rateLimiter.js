class RateLimiter {
  constructor(cooldownMs = 5000) {
    this.cooldownMs = cooldownMs;
    this.timestamps = new Map();
  }

  canExecute(key) {
    const lastExecution = this.timestamps.get(key);
    if (!lastExecution) {
      return { allowed: true, remainingMs: 0 };
    }

    const elapsed = Date.now() - lastExecution;
    const remainingMs = Math.max(0, this.cooldownMs - elapsed);

    return {
      allowed: remainingMs === 0,
      remainingMs
    };
  }

  execute(key, callback) {
    const { allowed, remainingMs } = this.canExecute(key);
    
    if (!allowed) {
      return { success: false, remainingMs };
    }

    this.timestamps.set(key, Date.now());
    
    if (callback) {
      callback();
    }

    return { success: true, remainingMs: 0 };
  }

  getRemainingMs(key) {
    const lastExecution = this.timestamps.get(key);
    if (!lastExecution) {
      return 0;
    }

    const elapsed = Date.now() - lastExecution;
    return Math.max(0, this.cooldownMs - elapsed);
  }

  reset(key) {
    if (key) {
      this.timestamps.delete(key);
    } else {
      this.timestamps.clear();
    }
  }
}

export default RateLimiter;

