/* eslint-disable no-console */

function toPascalCase(str) {
  return str.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();}).replace(/-/g, '')
}

const iconsFolder = 'src/assets/icons/svgo';
const fs = require('fs');

fs.readdir(iconsFolder, (err, files) => {
  files.forEach(iconFile => {
    if (iconFile.startsWith('.')) { // hidden files (es. .DS_store)
      return
    }

    // --------------------- Read svg files --------------------------------
    let svgoData

    try {
      svgoData = fs.readFileSync(`src/assets/icons/svgo/${iconFile}`, 'utf8')
      // console.log(svgoData)
    } catch (err) {
      console.error(err)
    }

    // ---------------------- Generate vue component content -------------

    const fileName = toPascalCase(iconFile).slice(0, -4) // remove .svg at the end

const fileContent = `<template>
  ${svgoData}
</template>

<script lang="js">
  export default  {
    name: '${fileName}',

    props: {

    },
}
</script>

<style lang="scss">
  // .${iconFile} {}
</style>
`

      // --------------------- Write vue icon file ----------------------

      const filepath = `src/components/icons/${fileName}.vue`

      if (svgoData) {
        fs.writeFile(filepath, fileContent, (err) => {
            if (err) throw err

            console.log(`The file ${fileName} was succesfully saved!`)
        })
      }
    })
  })
