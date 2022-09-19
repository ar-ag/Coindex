import {program} from 'commander';
import {key} from '../commands/key.js';

program
    .command('set')
    .description('Set yout API key -- Get at https://nomics.com')
    .action(key.set);

    program
    .command('show')
    .description('Show yout API key')
    .action(key.show);

    program
    .command('remove')
    .description('Remove yout API key ')
    .action(key.remove);

program.parse(process.argv);