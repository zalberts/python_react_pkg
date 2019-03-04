
class BaseConfig:
    DEBUG = False
    TESTING = False


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SEND_FILE_MAX_AGE_DEFAULT = 0
