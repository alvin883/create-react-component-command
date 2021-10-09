// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createFile, createFolder } from './file';
import {
  componentTemplateJavascript,
  componentTemplateTypescript,
  indexTemplateJavascript,
  indexTemplateTypescript,
  styleTemplateJavascript,
  styleTemplateTypescript,
} from './template';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "create-react-component-command" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let createTypescript = vscode.commands.registerCommand(
    'create-react-component-command.createTypescript',
    async () => {
      const isOpenWorkspace = vscode.workspace.workspaceFolders !== undefined;

      if (!isOpenWorkspace) {
        vscode.window.showErrorMessage(`You don't have any workspace open`);
        return;
      }

      const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.path;
      const componentName = await vscode.window.showInputBox({
        prompt: `Create component in './components/'`,
        placeHolder: 'MyComponent',
      });

      vscode.window.showInformationMessage(
        `Hello World from create-react-component-command! ${componentName}`
      );

      const isValidName =
        componentName !== undefined && componentName.length > 0;

      if (!isValidName) {
        vscode.window.showErrorMessage('Must provide component name');
        return;
      }

      const componentFolder = `${workspacePath}/src/components/${componentName}`;
      const componentFile = `${componentFolder}/${componentName}.tsx`;
      const indexFile = `${componentFolder}/index.ts`;
      const styleFile = `${componentFolder}/${componentName}.module.scss`;
      createFolder(componentFolder, vscode.window);
      createFile(
        componentFile,
        componentTemplateTypescript(componentName),
        vscode.window
      );
      createFile(
        indexFile,
        indexTemplateTypescript(componentName),
        vscode.window
      );
      createFile(
        styleFile,
        styleTemplateTypescript(componentName),
        vscode.window
      );
    }
  );

  let createJavascript = vscode.commands.registerCommand(
    'create-react-component-command.createJavascript',
    async () => {
      const isOpenWorkspace = vscode.workspace.workspaceFolders !== undefined;

      if (!isOpenWorkspace) {
        vscode.window.showErrorMessage(`You don't have any workspace open`);
        return;
      }

      const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.path;
      const componentName = await vscode.window.showInputBox({
        prompt: `Create component in './components/'`,
        placeHolder: 'MyComponent',
      });

      vscode.window.showInformationMessage(
        `Hello World from create-react-component-command! ${componentName}`
      );

      const isValidName =
        componentName !== undefined && componentName.length > 0;

      if (!isValidName) {
        vscode.window.showErrorMessage('Must provide component name');
        return;
      }

      const componentFolder = `${workspacePath}/src/components/${componentName}`;
      const componentFile = `${componentFolder}/${componentName}.jsx`;
      const indexFile = `${componentFolder}/index.js`;
      const styleFile = `${componentFolder}/${componentName}.module.scss`;
      createFolder(componentFolder, vscode.window);
      createFile(
        componentFile,
        componentTemplateJavascript(componentName),
        vscode.window
      );
      createFile(
        indexFile,
        indexTemplateJavascript(componentName),
        vscode.window
      );
      createFile(
        styleFile,
        styleTemplateJavascript(componentName),
        vscode.window
      );
    }
  );

  context.subscriptions.push(createTypescript);
  context.subscriptions.push(createJavascript);
}

// this method is called when your extension is deactivated
export function deactivate() {}
