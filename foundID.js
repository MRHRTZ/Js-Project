const bmkg = require('bmkg')
const fs = require('fs')

// // const obj = JSON.parse(fs.readFileSync('./beemkageh.json', 'utf8'))

const single = async () => {
    try {
        let res = await bmkg.weather.single(12);
        // obj.push(res)
        // fs.writeFileSync('./beemkageh.json', JSON.stringify(res, null, 2))

        const tempat = res.area

        let nama_tempat = `List Daerah yang dikenal :\n\n`
        for (let i = 0; i < tempat.length; i++) {
          nama_tempat += `>> ${tempat[i].meta.name}\n`
        }
        console.log(nama_tempat)
        // console.log(Date(202012050000))
    } catch (error) {
      console.log(error);
    }
  };
  
  single();

// const single = async () => {
//   try {
//     let res = await bmkg.weather.single(11);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// single();
