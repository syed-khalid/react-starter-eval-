/**
 * Mock API.
 *
 * You don't need to read or modify this file.
 */

const API = {
	/**
	 * Fetch driver information.
	 *
	 * @param {string} uuid Driver's UUID.
	 * @returns {Promise<{ email: string }>} Driver information.
	 */
	fetchDriver(uuid) {
		const emailByUUID = {
			L: "lennon@uber.com",
			M: "mccartney@uber.com",
			H: "harrison@uber.com",
			S: "starr@uber.com",
			O: "ozzy@sabbath.com",
		};
		if (emailByUUID[uuid]) {
			return Promise.resolve({ email: emailByUUID[uuid] });
		}
		return Promise.reject({ error: "Can't find driver by UUID" });
	},

	/**
	 * Fetch recent trips for rider. Returns 5 trips at a time.
	 *
	 * @param {string} uuid Rider's UUID.
	 * @param {number} offset Offset.
	 *
	 * @returns {Promise<{ driverUUID: string, timestamp: string }>} Recent trips.
	 */
	fetchRecentTripsForRider(uuid, offset = 0) {
		const SIZE = 5;
		const DAY = 1000 * 60 * 60 * 24;

		if (uuid !== "TEST") {
			return Promise.reject(`Please use "TEST" as rider UUID.`);
		}

		return Promise.resolve(
			[
				{ driverUUID: "L", timestamp: Date.now() - 1 * DAY },
				{ driverUUID: "M", timestamp: Date.now() - 1 * DAY },
				{ driverUUID: "H", timestamp: Date.now() - 2 * DAY },
				{ driverUUID: "M", timestamp: Date.now() - 3 * DAY },
				{ driverUUID: "L", timestamp: Date.now() - 5 * DAY },
				{ driverUUID: "H", timestamp: Date.now() - 8 * DAY },
				{ driverUUID: "S", timestamp: Date.now() - 13 * DAY },
				{ driverUUID: "S", timestamp: Date.now() - 21 * DAY },
				{ driverUUID: "M", timestamp: Date.now() - 34 * DAY },
				{ driverUUID: "M", timestamp: Date.now() - 55 * DAY },
				{ driverUUID: "O", timestamp: Date.now() - 89 * DAY },
			].slice(offset, offset + SIZE)
		);
	},
};

export default API;
