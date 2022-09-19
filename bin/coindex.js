#!/usr/bin/env node 

import {program} from 'commander';
import pkg from '../package.json' assert {type:'json'};


program
    .version(pkg.version)
    .command('key', 'Manage API keys -- https://nomics.com')
    .command('check','Check coin price info')
    
program.parse(process.argv);
    


// console.log("hello world");