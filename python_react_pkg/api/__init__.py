from flask import Blueprint, request
import logging
from flask_socketio import emit
import random

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



@api.route('/piedata')
def test_route_2():
    num = int(request.args.get('data_points',3))
    return {'data': [random.randint(30,100) for _ in range(num)]}




@socketio.on('connect')
def on_connect():
    emit('my_response', {'data': 'Connected', 'count': 0})
    logger.debug('Client connected {}'.format(request))


@socketio.on('disconnect')
def on_disconnect():
    logger.debug('Client disconnected {}'.format(request))
