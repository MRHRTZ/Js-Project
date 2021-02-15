const pm2 = require('pm2');

pm2.connect(function (err) {
     if (err) {
          console.error(err);
          process.exit(2);
     }

     // pm2.list((err, list) => {
     //      // console.log(err, list)
     //      let data = []
     //      for (let i = 0; i < list.length; i++) {
     //           const { pid, name, pm2_env } = list[i]
     //           data.push({ status: pm2_env.status, name: name, pid: pid })
     //      }
     //      console.log(data)
     //      pm2.disconnect()
     // })

     pm2.stop('MRHRTZ', (err, proc) => {
          if (err) {
               console.log(err)
               pm2.disconnect()
               return
          }
          const { name, status } = proc[0]
          console.log({name : name, status: status})
          pm2.disconnect()
     })

     // pm2.restart('app-name', (err, proc) => {
     // })

     // pm2.start({
     //      script: 'photooxy.js',         // Script to be run
     //      name: 'Mine',
     //      args: args[1],
     //      max_memory_restart: '5000M'   // Optional: Restarts your app if it reaches 100Mo
     // }, function (err, apps) {
     //      pm2.disconnect();   // Disconnects from PM2
     //      if (err) throw err
     //      console.log()
     // });
});

// const cp = require('child_process');
// const chalk = require('chalk')

// // cp.exec('start cmd.exe /K node photooxy.js', (err, stdout, stderr) => {
// //      console.log(stdout)
// //      cp.execSync('exit')
// // })

// const sou = cp.spawn('node', [
//      '../beleis/runner.js'
// ])

// sou.stdout.on('data', function (chunk) {
//      console.log(chunk.toString())// output will be here in chunks
// });

// sou.stderr.on('data', function (data) {
//      console.log('stderr: ' + data.toString());
// });

// sou.on('exit', function (code) {
//      console.log(chalk.green('[ Proses berhasil diakhiri dengan kode : ' + code.toString() + ' ]'));
// });