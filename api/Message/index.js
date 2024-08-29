module.exports = async function (context, req) {
    const connectionString = process.env.DATABASE_CONNECTION_STRING;
    context.res.json({
        text: "connectionString in API:"+connectionString
    });
};