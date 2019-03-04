from . import create_app, socketio
from . import config


def main():
    import argparse
    parser = argparse.ArgumentParser(
        description='Python React webapp',
    )
    parser.add_argument('--host', action='store', default='0.0.0.0')
    parser.add_argument('--port', action='store', default='5000', type=int)
    parser.add_argument('--debug', action='store_true')
    results = parser.parse_args()

    host = results.host
    port = results.port

    conf = config.DevelopmentConfig if results.debug else config.BaseConfig
    app = create_app(conf)
    socketio.run(app, host=host, port=port, debug=app.config['DEBUG'])


if __name__ == "__main__":
    main()
