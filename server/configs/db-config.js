import { env } from 'node:process';
import {config} from 'dotenv';

config({ path: '.env'});

const jwt_access_secret = env.JWT_ACCESS_SECRET;
const jwt_refresh_secret = env.JWT_REFRESH_SECRET;

const db_name = env.MONGODB_NAME;
const db_user_name = env.MONGODB_USER_NAME;
const db_user_pass = env.MONGODB_USER_PASSWORD;
const db_port = env.MONGODB_PORT;
const db_host_part = env.MONGODB_HOST_PART + db_port;
const db_host = 'n1-c2-' + db_host_part + ',n2-c2-' + db_host_part;
const db_url = 'mongodb://'+ db_user_name + ':' + db_user_pass +'@'+ db_host +'/' + db_name + '?replicaSet=rs0';

const smtp_host = env.SMTP_HOST;
const smtp_port = env.SMTP_PORT;
const smtp_user = env.SMTP_USER;
const smtp_password = env.SMTP_PASSWORD;

const api_url = env.API_URL;

export {
    jwt_access_secret,
    jwt_refresh_secret,
    db_url, smtp_host,
    smtp_port,
    smtp_user,
    smtp_password,
    api_url,
};
