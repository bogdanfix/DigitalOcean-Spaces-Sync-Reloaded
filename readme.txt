=== Plugin Name ===
Contributors: BogdanFix, keeross
Donate link: https://www.paypal.me/bogdanfix
Tags: digitalocean, spaces, cloud, storage, object, s3
Requires at least: 4.6
Tested up to: 5.9.3
Stable tag: 2.2.1
License: MIT
License URI: https://opensource.org/licenses/MIT

This WordPress plugin syncs your media library with DigitalOcean Spaces Container.

== Description ==

DigitalOcean Spaces Sync plugin connects your Media Library to a container in DigitalOcean Spaces. It syncs data from your website to cloud storage
and replaces links to images (optional). You may keep the media locally (on your server) and make backup copy to cloud storage, or just serve it all 
from DigitalOcean Spaces.

In order to use this plugin, you have to create a DigitalOcean Spaces API key.

You may now define constants in order to configure the plugin. If the constant is defined, it overwrites the value from settings page.
Contants description:
- DOS_KEY - DigitalOcean Spaces key
- DOS_SECRET - DigitalOcean Spaces secret,
- DOS_ENDPOINT - DigitalOcean Spaces endpoint,
- DOS_CONTAINER - DigitalOcean Spaces container,
- DOS_STORAGE_PATH - The path to the file in the storage, will appear as a prefix,
- DOS_STORAGE_FILE_ONLY - Keep files only in DigitalOcean Spaces or not, values (true|false),
- DOS_STORAGE_FILE_DELETE - Remove files in DigitalOcean Spaces on delete or not, values (true|false),
- DOS_FILTER - A Regex filter,
- UPLOAD_URL_PATH - A full url to the files, WP Constant,
- UPLOAD_PATH - A path to the local files, WP Constant

There is a known issue with the built in Wordpress Image Editor, it will not upload changed images. Know how to fix this, PR welcome.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/do-spaces-sync` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Use the Settings->DigitalOcean Spaces Sync screen to configure the plugin
4. Create a DigitalOcean Spaces API key and container

== Screenshots ==

1. Configuration screen

== Changelog ==

= 2.2.1 =
* Changed "upload done" hook to improve performance (https://github.com/keeross/DigitalOcean-Spaces-Sync/issues/34)

= 2.2.0 =
* Fix Test Connection ignore post data (https://github.com/keeross/DigitalOcean-Spaces-Sync/pull/27)
* Fix dupe files in delete attachment (https://github.com/keeross/DigitalOcean-Spaces-Sync/pull/33)

= 2.1.0 =
* Fix empty upload path cause create server real path in DO Space (https://github.com/keeross/DigitalOcean-Spaces-Sync/pull/15)
* Fix PHP Deprecated warning (https://github.com/keeross/DigitalOcean-Spaces-Sync/pull/20)

= 2.0.5 =
* Fixed issue with constant initialization
* Updated packages

= 2.0.4 =
* Fixed file_path for multisite setup
* Fix preg_match() Warning if Filemask/Regex in DOS setting is empty

= 2.0.3 =
* Fixed attachment save on image edit
* It may now work with image optimization plugins, if not, report

= 2.0.2.1 =
* Hotfix, thanks WP SVN, start using Git finally.

= 2.0.1 =
* Rewrote the plugin.
* Removed useless code.
* Fixed unique filename problem.
* Added constants that may be defined.

= 1.1.1 =
* Removed attachment url rewrite, it was not consistent.

= 1.1.0.2 =
* Had to push version up in order svn to catchup with updates.

= 1.1.0 =
* Fixed filemasks, now using regex.
* Added ability to rewrite attachment url for filtered files returning original url, this thing may be buggy, so waiting for reports.

= 1.0.8 =
* Renamed the plugin.
* Removed useless options.
* Fixed file removal issue.
* No need for region in S3Client.

= 1.0.7.1 =
* A hotfix for logger.

= 1.0.7 =
* Updated methods to fix non-images uploads.

= 1.0.6 =
* Removed useless log messages.

= 1.0.3 =
* Fixed upload path param.

= 1.0.2 =
* Nothing really special, added icons and tested with WP 4.9.

= 1.0.1 =
* Initial releasse.
