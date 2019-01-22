/* eslint-disable no-console */

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
}

let fileName = process.argv[2] // es. node createComponent.js IconConfetti
const fileNameKebab = toKebabCase(fileName)

// --------------------- Read file --------------------------------

const fs = require('fs')
let svgoData

try {
  svgoData = fs.readFileSync(`src/assets/icons/svgo/${fileNameKebab}.svg`, 'utf8')
} catch (err) {
  console.error(err)
}

// ---------------------- Generate vue component content -------------

const fileContent = `
<template>
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
  // .${fileNameKebab} {}
</style>
`

// --------------------- Write vue icon file ----------------------

const filepath = `src/components/icons/${fileName}.vue`

if (svgoData) {
  fs.writeFile(filepath, fileContent, (err) => {
      if (err) throw err

      console.log("The file was succesfully saved!")
  })
}
