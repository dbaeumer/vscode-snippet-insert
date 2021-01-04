// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.languages.registerCompletionItemProvider('plaintext', {
		provideCompletionItems: (document, position, token) => {
			const result: vscode.CompletionItem[] = [];
			let item = new vscode.CompletionItem('-record');
			item.insertText = new vscode.SnippetString('-record(${1:name}, {${2:field} = ${3:Value} :: ${4:Type}()}).');
			item.kind = vscode.CompletionItemKind.Snippet;
			result.push(item);
			return result;
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
