## DigitalOcean Spaces Sync Reloaded
This WordPress plugin syncs your media library with [DigitalOcean Spaces](https://bit.ly/digital-ocean-spaces) Container.

### Description
This WordPress plugin syncs your media library with [DigitalOcean Spaces](https://bit.ly/digital-ocean-spaces) Container. It allows you to simuntanously upload and delete files, replacing public media URL with relative cloud storage links. You can choose between two options, to keep local copy of the files, or to delete them and keep files only in cloud storage.

Now this plugin can also sync all existing images in your Wordpress media library to DigitalOcean Spaces retroactively with new "migrate existing media" feature.

In order to use this plugin, you have to create a DigitalOcean Spaces API key.

You may now define constants in order to configure the plugin. If the constant is defined, it overwrites the value from settings page.
Contants description:
- `DOS_KEY` - DigitalOcean Spaces key
- `DOS_SECRET` - DigitalOcean Spaces secret,
- `DOS_ENDPOINT` - DigitalOcean Spaces endpoint,
- `DOS_CONTAINER` - DigitalOcean Spaces container,
- `DOS_STORAGE_PATH` - The path to the file in the storage, will appear as a prefix,
- `DOS_STORAGE_FILE_ONLY` - Keep files only in DigitalOcean Spaces or not, values (true|false),
- `DOS_STORAGE_FILE_DELETE` - Remove files in DigitalOcean Spaces on delete or not, values (true|false),
- `DOS_FILTER` - A Regex filter,
- `UPLOAD_URL_PATH` - A full url to the files, WP Constant,
- `UPLOAD_PATH` - A path to the local files, WP Constant

There is a known issue with the built in Wordpress Image Editor, it will not upload changed images. Know how to fix this, PR welcome.

### Installation

1. Upload plugin directory to `/wp-content/plugins/`
2. Activate plugin through 'Plugins' menu in WordPress
3. Go to `Settings -> DigitalOcean Spaces Sync` and set up plugin

If plugin has been downloaded from GitHub, you have to install vendor components via `composer update`.
