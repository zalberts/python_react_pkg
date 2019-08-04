import gevent.monkey
gevent.monkey.patch_all()

from flask import Flask, render_template
from flask_socketio import SocketIO

from ._version import get_versions
__version__ = get_versions()['version']
del get_versions


socketio = SocketIO()


def register_extentions(app):
    socketio.init_app(app)


def register_blueprints(app):
    from .base import base
    app.register_blueprint(base)

    from .api import api
    app.register_blueprint(api)


def create_app(conf):
    app = Flask(
        __name__,
        static_folder='./static',
        template_folder='./templates',
    )
    app.config.from_object(conf)

    register_extentions(app)
    register_blueprints(app)

    return app
