const jwt_access_secret='gdshgt-sdfjkj-jhf234hhsjh532';
const jwt_refresh_secret='dsf347fg-dfg34gd-fg34dfdfkslk';

const db_user_name = 'unoi4ama7pdnvv8954b3';
const db_user_pass = '1rRh6tdQFJ6wJIxiimHQ';
const db_port = '27017';
const db_host_part = 'mongodb-clevercloud-customers.services.clever-cloud.com:' + db_port;
const db_host = 'n1-c2-' + db_host_part + ',n2-c2-' + db_host_part;
const db_url = 'mongodb://'+ db_user_name + ':' + db_user_pass +'@'+ db_host +'/btk2faugwkf47cb?replicaSet=rs0';

export {jwt_access_secret, jwt_refresh_secret, db_url};
