const { PastContracts } = require('../../middlewares/orm');

module.export = {
    getPastContracts() {
        return PastContracts.query();
    },

    getPastContractsByMajor(short) {
        return PastContracts.query()
        .alias("c")
        .select("*")
        .where({shortland: short});
    }
}