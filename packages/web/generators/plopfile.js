module.exports = function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: 'Type component or template please',
                default: 'components',
                choices: [
                    { name: 'Component', value: 'components' },
                    { name: 'Template', value: 'templates' }
                ]
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name please'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '../src/{{kebabCase type}}/{{kebabCase name}}/index.tsx',
                templateFile: 'templates/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.styles.ts',
                templateFile: 'templates/Component.styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'templates/Component.test.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/{{kebabCase type}}/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'templates/Component.stories.tsx.hbs'
            }
        ]
    })
}
