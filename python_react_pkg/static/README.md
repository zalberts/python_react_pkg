# Python React Static Folder
This directory should contain a folder name `dist/` after running `python
setup.py build` that will contain the build javascript, css, and any other
resources that are outputs of the webpack build.

Any compiled static resources should also go here. As this package will be used
offline, any links in the html will not work in the final deployment, therefore
concrete distributions must be stored here.
