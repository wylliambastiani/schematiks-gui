// Use new namespace for require so that
// normal js modules can use 'require' properly.
ElectronRequire = require;
delete require;