const grab = require('ps-grab');
const fs = require('file-system');
const _kebabCase = require('lodash/kebabCase');
const _forEach = require('lodash/forEach');

const options = {
  name: grab('--name'),
  type: grab('--type'),
  directive: {
    dirUrl: 'src/directives/',
    onlyCopyFiles: [
      'demo.html',
      'stories.js',
      'directive/generate.controller.js'
    ],
    modifyFiles: [
      'index.js',
      'route.js',
      'directive/generate.directive.js',
      'directive/generate.directive.spec.js',
      'directive/style.less',
      'directive/template.html'
    ]
  },
  filter: {
    dirUrl: 'src/filters/',
    onlyCopyFiles: [
      'stories.js'
    ],
    modifyFiles: [
      'demo.html',
      'index.js',
      'route.js',
      'filter/generate.filter.js',
      'filter/generate.filter.spec.js'
    ]
  }
};

const itemType = options[options.type];
const dirName = itemType.dirUrl + _kebabCase(options.name);

fs.mkdir(dirName, null, function() {
  fs.mkdir(dirName + '/' + options.type, null, function() {

    _forEach(itemType.onlyCopyFiles, (file) => generateCopyFiles(file, options.type));

    _forEach(itemType.modifyFiles, (file) => generateModifyFiles(file, options.type));

    generateImports(options.type);

    console.log(`Your ${options.type} generated successfully.`);
  });
});

function getConstructorName(name) {
  return name.charAt(0).toUpperCase() + name.substr(1) + 'Directive';
}

function generateCopyFiles(file, type) {
  const filePath = `generate-files/${type}/${file}`;
  let outputFileName = file;

  if (file.indexOf('generate.controller.js') !== -1) {
    outputFileName = `directive/${_kebabCase(options.name)}.controller.js`;
  }

  fs.copyFile(filePath, dirName + '/' + outputFileName);
}

function generateModifyFiles(file, type) {
  if (type === 'directive') {
    const filePath = `generate-files/${options.type}/${file}`;
    switch (file) {
      case 'index.js' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            let processedContent = content.replace('generate.directive', `${_kebabCase(options.name)}.directive`);
            processedContent = processedContent.replace('generateDirective', `${options.name}Directive`);

            return processedContent;
          }
        });
        break;
      }
      case 'route.js' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            return content.replace('generate-directive', `${_kebabCase(options.name)}-directive`);
          }
        });
        break;
      }
      case 'directive/generate.directive.js' : {
        let outputFileName = null;
        if (file.indexOf('generate.directive.js') !== -1) {
          outputFileName = `directive/${_kebabCase(options.name)}.directive.js`;
        }

        fs.copyFileSync(filePath, dirName + '/' + outputFileName, {
          process: function (content) {
            const constructorName = getConstructorName(options.name);
            let processedContent = content.replace(/generateDirective/g, options.name);
            processedContent = processedContent.replace('generate.controller', `${_kebabCase(options.name)}.controller`);
            processedContent = processedContent.replace(/GenerateDirective/g, constructorName);

            return processedContent;
          }
        });
        break;
      }
      case 'directive/generate.directive.spec.js' : {
        let outputFileName = null;
        if (file.indexOf('generate.directive.spec.js') !== -1) {
          outputFileName = `directive/${_kebabCase(options.name)}.directive.spec.js`;
        }

        fs.copyFileSync(filePath, dirName + '/' + outputFileName, {
          process: function (content) {
            let processedContent = content.replace(/generateTag/g, `${_kebabCase(options.name)}`);
            processedContent = processedContent.replace(/generate/g, options.name);

            return processedContent;
          }
        });
        break;
      }

      case 'directive/template.html' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            return content.replace('generate', _kebabCase(options.name));
          }
        });
        break;
      }

      case 'directive/style.less' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            return content.replace('generate', _kebabCase(options.name));
          }
        });
        break;
      }
    }
  } else if (type === 'filter') {
    const filePath = `generate-files/${options.type}/${file}`;
    switch (file) {
      case 'index.js' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            let processedContent = content.replace('generate.filter', `${_kebabCase(options.name)}.filter`);
            processedContent = processedContent.replace('generateFilter', `${options.name}Filter`);

            return processedContent;
          }
        });
        break;
      }
      case 'route.js' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            return content.replace('generate-filter', `${_kebabCase(options.name)}-filter`);
          }
        });
        break;
      }
      case 'filter/generate.filter.js' : {
        let outputFileName = null;
        if (file.indexOf('generate.filter.js') !== -1) {
          outputFileName = `filter/${_kebabCase(options.name)}.filter.js`;
        }

        fs.copyFileSync(filePath, dirName + '/' + outputFileName, {
          process: function (content) {
            let processedContent = content.replace('generateFilter', `${options.name}Filter`);
            processedContent = processedContent.replace('generate', options.name);

            return processedContent;
          }
        });
        break;
      }
      case 'filter/generate.filter.spec.js' : {
        let outputFileName = null;
        if (file.indexOf('generate.filter.spec.js') !== -1) {
          outputFileName = `filter/${_kebabCase(options.name)}.filter.spec.js`;
        }

        fs.copyFileSync(filePath, dirName + '/' + outputFileName, {
          process: function (content) {
            let processedContent = content.replace(/generateFilter/g, `${options.name}Filter`);
            processedContent = processedContent.replace('generate', options.name);

            return processedContent;
          }
        });
        break;
      }

      case 'demo.html' : {
        fs.copyFileSync(filePath, dirName + '/' + file, {
          process: function (content) {
            return content.replace('generate', options.name);
          }
        });
        break;
      }
    }
  }
}

function generateImports(type) {
  const comments = {
    generateDI: '//generate',
    generateImport: '//importGenerate'
  };
  const path = `${options[type].dirUrl}/${type}s.import.js`;

  fs.copyFileSync(path, path, {
    process: function(content) {
      const kebabCaseName = _kebabCase(options.name);
      let processedContent = content.replace(comments.generateDI, `${options.name},\n  ${comments.generateDI}`);
      processedContent = processedContent.replace(comments.generateImport, `import ${options.name} from './${kebabCaseName}/${options.type}/${kebabCaseName}.${options.type}';\n${comments.generateImport}`);

      return processedContent;
    }
  });

  const pathIndex = `${options[type].dirUrl}/index.js`;
  fs.copyFileSync(pathIndex, pathIndex, {
    process: function(content) {
      const kebabCaseName = _kebabCase(options.name);
      let processedContent = content.replace(comments.generateDI, `${options.name}Index,\n  ${comments.generateDI}`);
      processedContent = processedContent.replace(comments.generateImport, `import ${options.name}Index from './${kebabCaseName}/index';\n${comments.generateImport}`);

      return processedContent;
    }
  });
}