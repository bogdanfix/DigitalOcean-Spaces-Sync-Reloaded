=== DigitalOcean Spaces Sync Reloaded ===
Contributors: BogdanFix, rnmartinez, keeross
Donate link: https://www.paypal.me/bogdanfix
Tags: digitalocean, spaces, cloud, storage, object, s3
Requires at least: 4.6
Tested up to: 6.1
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/licenses/MIT

This WordPress plugin syncs your media library with DigitalOcean Spaces Container. And can sync your existing media too!

== Description ==

DigitalOcean Spaces Sync plugin connects your Media Library to a container in DigitalOcean Spaces. It syncs data from your website to cloud storage and replaces links to images (optional). You may keep the media locally (on your server) and make backup copy to cloud storage, or just serve it all from DigitalOcean Spaces.

In order to use this plugin, you have to create a DigitalOcean Spaces API key.

Update: Now this plugin can also sync all existing images in your Wordpress media library to DigitalOcean Spaces retroactively with new "migrate existing media" feature.

You may now define constants in order to configure the plugin. If the constant is defined, it overwrites the value from settings page.
Contants description:
- DOS_KEY - DigitalOcean Spaces key
- DOS_SECRET - DigitalOcean Spaces secret
- DOS_ENDPOINT - DigitalOcean Spaces endpoint
- DOS_CONTAINER - DigitalOcean Spaces container
- DOS_STORAGE_PATH - The path to the file in the storage, will appear as a prefix
- DOS_STORAGE_FILE_ONLY - Keep files only in DigitalOcean Spaces or not, values (true|false)
- DOS_STORAGE_FILE_DELETE - Remove files in DigitalOcean Spaces on delete or not, values (true|false)
- DOS_FILTER - A Regex filter
- UPLOAD_URL_PATH - A full url to the files, WP Constant
- UPLOAD_PATH - A path to the local files, WP Constant

There is a known issue with the built in Wordpress Image Editor, it will not upload changed images. If you know how to fix this, PR is welcome :)

== Installation ==

1. Create a DigitalOcean Spaces API key and container (if not created yet)
2. Upload plugin directory to `/wp-content/plugins/` or install the plugin through the WordPress plugins screen directly
3. Activate plugin through 'Plugins' menu in WordPress
4. Go to `Settings -> DigitalOcean Spaces Sync Reloaded` and set up plugin

== Screenshots ==

1. Configuration screen

== Changelog ==

= 1.0.0 =
* Initial release. Big thanks to Rodolfo Martinez @rnmartinez! And author of the original plugin @keeross. Inherited from https://wordpress.org/plugins/do-spaces-sync/
