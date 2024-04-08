const { app, BrowserWindow, ipcMain, dialog } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: false
        }
    });

    mainWindow.loadFile('index.html');

    ipcMain.handle('show-save-dialog', async (event, options) => {
        const { filePath } = await dialog.showSaveDialog(mainWindow, options);
        return filePath;
    });
}

app.whenReady().then(createWindow);
