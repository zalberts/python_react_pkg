from setuptools import setup, find_packages
import versioneer
import distutils.command
import distutils.log
import subprocess


name = 'python_react_pkg'
description = 'Template for a React/Flask based web app in a package format'
version = versioneer.get_version()
sphinx_version = '.'.join(version.split('.')[:2])

cmd_classes = versioneer.get_cmdclass()


class NpmBuild(distutils.cmd.Command):
    description = 'build web client'
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        command = ['npm', 'run', 'build']
        self.announce(
            'Running command %s' % str(command),
            level=distutils.log.INFO
        )
        subprocess.check_call(command)


cmd_classes['npm_build'] = NpmBuild

ver_build = cmd_classes['build_py']


class build_py(ver_build):
    def run(self):
        self.run_command('npm_build')
        ver_build.run(self)

cmd_classes['build_py'] = build_py


if __name__ == '__main__':
    setup(
        name=name,
        packages=find_packages(exclude=['tests']),
        version=version,
        cmdclass=cmd_classes,
        description=description,
        long_description=open('README.md', 'r').read(),
        author='Cameron Phillips',
        author_email='cam.phillips22@gmail.com',
        url='https://github.com/camphillips22/python_react_pkg.git',
        license=open('LICENSE', 'r').read(),
        install_requires=(
            'gevent',
            'flask',
            'Flask-SocketIO',
        ),
        tests_require=(),
        include_package_data=True,
        zip_safe=False,
        command_options={
            'build_sphinx': {
                'project': ('setup.py', name),
                'version': ('setup.py', sphinx_version),
                'release': ('setup.py', version),
                'source_dir': ('setup.py', 'doc/source'),
                'build_dir': ('setup.py', 'doc/build'),
            },
        },
    )
