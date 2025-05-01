import chalk from 'chalk';

console.log(chalk.blue('Starting Docker container...'));
console.log(chalk.green('✓ Container started successfully'));
console.log(chalk.yellow('⚠ Warning: Port 3000 is in use'));
console.log(chalk.red('✗ Error: Failed to connect to database'));

// You can also chain styles
console.log(chalk.bgBlue.white(' Docker Status '));
console.log(chalk.bold.cyan('Container ID: abc123'));
console.log(chalk.dim('Last updated: 2 minutes ago'));

// Create a custom theme
const success = chalk.green.bold;
const error = chalk.red.bold;
const info = chalk.blue;

console.log(success('Build completed successfully!'));
console.log(error('Build failed!'));
console.log(info('Running tests...')); 