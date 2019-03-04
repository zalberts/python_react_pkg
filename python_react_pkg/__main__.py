from . import create_app, socketio


def main():
    import argparse
    parser = argparse.ArgumentParser(
        description='Python React webapp',
    )
    parser.add_argument('--host', action='store', default='0.0.0.0')
    parser.add_argument('--port', action='store', default='5000', type=int)
    results = parser.parse_args()

    host = results.host
    port = results.port

    app = create_app()
    socketio.run(app, host=host, port=port, debug=True)


if __name__ == "__main__":
    main()
