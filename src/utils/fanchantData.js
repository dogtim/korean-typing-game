/**
 * Official K-Pop Fanchant (應援 / 應援法 / 응원 / 응원법) Guide Data
 * 
 * Individual song fanchants are now modularized under `src/data/fanchants/`.
 * This file maintains 100% backward compatibility for existing imports across the application.
 */

export * from '../data/fanchants/index.js';
export { default as fanchantIndex } from '../data/fanchants/index.js';
