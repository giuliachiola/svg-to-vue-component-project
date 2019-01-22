// node createComponent.js [IconName]

// ---------------------- Generate content -----------------------

let iconName = process.argv[2] // es. node createComponent.js Header

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
}

const iconNameKebab = toKebabCase(iconName)

const template = `
<template>

</template>

<script lang="js">

  export default  {

    name: '${iconName}',

    props: {

    },
}
</script>

<style lang="scss">
  // .${iconNameKebab} {}
</style>
`

console.log(template)

// --------------------- Write file ----------------------

var fs = require('fs')

// Change the content of the file as you want
// or either set fileContent to null to create an empty file
var fileContent = template

// The absolute path of the new file with its name
var filepath = `src/components/icons/${iconName}.vue`

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err

    console.log("The file was succesfully saved!")
});
