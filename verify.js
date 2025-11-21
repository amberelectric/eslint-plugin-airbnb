#!/usr/bin/env node

// Verification script for eslint-plugin-amber

console.log('🔍 Verifying eslint-plugin-amber...\n');

let hasErrors = false;

// Test 1: Load the plugin
try {
  const plugin = require('./index.js');
  console.log('✅ Plugin loads successfully');
  console.log(`   Meta: ${plugin.meta.name} v${plugin.meta.version}`);
  
  // Test 2: Check configs
  const expectedConfigs = ['base', 'react', 'react-hooks', 'recommended'];
  const actualConfigs = Object.keys(plugin.configs);
  const missingConfigs = expectedConfigs.filter(c => !actualConfigs.includes(c));
  
  if (missingConfigs.length > 0) {
    console.log(`❌ Missing configs: ${missingConfigs.join(', ')}`);
    hasErrors = true;
  } else {
    console.log(`✅ All ${expectedConfigs.length} configs available: ${actualConfigs.join(', ')}`);
  }
  
  // Test 3: Verify base config
  const baseConfig = plugin.configs.base;
  if (baseConfig.name !== 'amber/base') {
    console.log('❌ Base config has wrong name');
    hasErrors = true;
  } else {
    console.log(`✅ Base config name: ${baseConfig.name}`);
  }
  
  const ruleCount = Object.keys(baseConfig.rules).length;
  if (ruleCount < 300) {
    console.log(`⚠️  Base config has only ${ruleCount} rules (expected 300+)`);
  } else {
    console.log(`✅ Base config has ${ruleCount} rules`);
  }
  
  // Test 4: Verify plugins
  const plugins = Object.keys(baseConfig.plugins);
  if (!plugins.includes('import')) {
    console.log('❌ Base config missing import plugin');
    hasErrors = true;
  } else {
    console.log(`✅ Base config has import plugin`);
  }
  
  // Test 5: Verify React config
  const reactConfigs = plugin.configs.recommended;
  if (!Array.isArray(reactConfigs)) {
    console.log('❌ Recommended config is not an array');
    hasErrors = true;
  } else if (reactConfigs.length !== 3) {
    console.log(`❌ Recommended config should have 3 configs, has ${reactConfigs.length}`);
    hasErrors = true;
  } else {
    console.log(`✅ Recommended config is array of ${reactConfigs.length} configs`);
    reactConfigs.forEach((cfg, i) => {
      console.log(`   ${i + 1}. ${cfg.name}`);
    });
  }
  
  // Test 6: Verify individual exports
  try {
    const baseExport = require('./base.js');
    console.log('✅ base.js exports correctly');
  } catch (e) {
    console.log('❌ base.js failed to load:', e.message);
    hasErrors = true;
  }
  
  try {
    const hooksExport = require('./hooks.js');
    console.log('✅ hooks.js exports correctly');
  } catch (e) {
    console.log('❌ hooks.js failed to load:', e.message);
    hasErrors = true;
  }
  
  try {
    const legacyExport = require('./legacy.js');
    console.log('✅ legacy.js exports correctly');
  } catch (e) {
    console.log('❌ legacy.js failed to load:', e.message);
    hasErrors = true;
  }
  
} catch (error) {
  console.log('❌ Failed to load plugin:', error.message);
  console.error(error.stack);
  hasErrors = true;
}

console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ Verification FAILED - please fix errors above');
  process.exit(1);
} else {
  console.log('✅ All verifications PASSED!');
  console.log('\n📦 eslint-plugin-amber is ready to use!');
  console.log('\nUsage:');
  console.log('  const amber = require("eslint-plugin-amber");');
  console.log('  module.exports = [...amber.configs.recommended];');
  process.exit(0);
}

