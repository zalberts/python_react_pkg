# Python React Package

This code is template project for a webapp that uses React for the frontend and
Flask for the backend. Webpack is used to bundle the assets and place them as
resources in the python package source. The python can then be bundled into a
package that can be uploaded to [PyPI.org]() or another python package index
for distribution.

## Installation and Building
### Frontend
Install the javascript dependencies with
```bash
npm install
```

The javascript can be built for production with either of the following
commands:
```bash
npm run build
python setup.py build
```

For development, use `npm run watch` to rebuild whenever the source is changed.

### Backend
The python backend can be run with

```bash
python ./python_react_pkg/__main__.py
```

or, for the development server:
```bash
python ./python_react_pkg/__main__.py --debug
```
