from flask import Blueprint, render_template

base = Blueprint(
    'base_blueprint',
    __name__,
    url_prefix='',
    template_folder='templates',
    static_folder='static'
)


@base.route('/')
def index():
    return render_template('index.html')
