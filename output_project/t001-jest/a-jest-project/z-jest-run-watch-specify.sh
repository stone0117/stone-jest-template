#!/usr/bin/env bash

folder=$(dirname $0)

cd "${folder}" || exit

npx jest --watch --colors --verbose --testNamePattern=^快照测试 \
--runTestsByPath /Users/stone/template_git_repository/stone-vue2-jest-template/output_project/t001-jest/a-jest-project/__tests__/snapshort.test.js


#/Users/stone/.nvm/versions/node/v14.17.6/bin/node \
#--require /Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-stdin-fix.js \
#/Users/stone/template_git_repository/stone-vue2-jest-template/output_project/t001-jest/a-jest-project/node_modules/jest/bin/jest.js \
#--watch \
#--colors \
#--reporters /Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-reporter.js \
#--verbose \
#--testNamePattern=^快照测试  \
#--runTestsByPath /Users/stone/template_git_repository/stone-vue2-jest-template/output_project/t001-jest/a-jest-project/__tests__/snapshort.test.js
