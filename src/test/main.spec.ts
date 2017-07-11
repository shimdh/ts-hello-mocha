import { assert } from "chai";
import "mocha";
import Main from "../main";

describe("Main", () => {

    let main: Main;

    beforeEach(() => {
        main = new Main();
    });

    describe("add", () => {
        it("should add numbers to success", (done) => {
            const actual: number = main.add(2, 3);
            assert.equal(actual, 5, "did not add numbers");
            done();
        });

        it("should add numbers to fail", (done) => {
            const actual: number = main.add(2, 3);
            assert.equal(actual, 3, "did not add numbers");
            done();
        });
    });
});
