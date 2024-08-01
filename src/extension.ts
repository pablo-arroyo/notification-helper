import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	const fileSaveListener = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
		const config = vscode.workspace.getConfiguration('notificationHelper');
		const messageToShow = config.get<string>('messageOnSave', 'Is this ETC? (Easy to change)');

		vscode.window.showInformationMessage(messageToShow);
	});

	context.subscriptions.push(fileSaveListener);
}

export function deactivate() { }
