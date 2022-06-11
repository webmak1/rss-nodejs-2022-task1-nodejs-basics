export const parseEnv = () => {
    const env = process.env;

    Object.keys(env).forEach(function(key) {
        console.log(  "RSS_"+ key + '=' + env[key] +';');
    });     
};

parseEnv();
