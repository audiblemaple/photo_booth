const path = require('path');
const {app, BrowserWindow} = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Photo app',
        width: isDev ? 1000 : 800,
        height: 600,
        autoHideMenuBar: true,
    });

    // Open devtools if in dev environment
    if (isDev){
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
});

// check if on mac because the processes are being terminated in different ways on windows and on mac.
app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
});