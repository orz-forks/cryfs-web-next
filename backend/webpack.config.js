const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: slsw.lib.entries,
    mode: 'production',
    target: 'node',
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    performance: {
        // Turn off size warnings for entry points
        hints: false
    },
    externals: [nodeExternals()],
    devtool: 'nosources-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
}
