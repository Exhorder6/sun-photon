var {supportedVersions} = require('../../components/TronSolc')

var command = {
  command: 'version',
  description: 'Show version number and exit',
  builder: {},
  run: function (options, done) {
    process.env.CURRENT = 'version'
    var version = require("../version");

    var bundle_version;

    if (version.bundle) {
      bundle_version = "v" + version.bundle;
    } else {
      bundle_version = "(unbundled)";
    }

    options.logger.log("SunPhoton " + bundle_version);
    options.logger.log("Solidity v" + supportedVersions[supportedVersions.length - 1] + " (tron-solc)");

    done();
  }
}

module.exports = command;
