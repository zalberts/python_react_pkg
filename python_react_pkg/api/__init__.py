from flask import Blueprint, request
import logging
from flask_socketio import emit

from .. import socketio

api = Blueprint(
    'api_blueprint',
    __name__,
    url_prefix='/api',
)

logger = logging.getLogger(__name__)


@api.route('/test')
def test_route():
    print('test')
    return 'test'


@socketio.on('connect')
def on_connect():
    emit('my_response', {'data': 'Connected', 'count': 0})
    logger.debug('Client connected {}'.format(request))


@socketio.on('disconnect')
def on_disconnect():
    logger.debug('Client disconnected {}'.format(request))
