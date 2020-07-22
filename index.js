let counter = 10;
let res = "";
console.log("Decremented the counter Using Call Back Hell In Javascript");
console.log("=====================================");
(function(counter) {
    (function a(counter) {
        res += counter.toString() + "..";
        counter--;
        (function b(counter) {
            res += counter.toString() + "..";
            counter--;
            (function c(counter) {
                res += counter.toString() + "..";
                counter--;
                (function d(counter) {
                    res += counter.toString() + "..";
                    counter--;
                    (function e(counter) {
                        res += counter.toString() + "..";
                        counter--;
                        (function f(counter) {
                            res += counter.toString() + "..";
                            counter--;
                            (function g(counter) {
                                res += counter.toString() + "..";
                                counter--;
                                (function h(counter) {
                                    res += counter.toString() + "..";
                                    counter--;
                                    (function i(counter) {
                                        res += counter.toString() + "..";
                                        counter--;
                                        (function j(counter) {
                                            res += counter.toString() + "..";
                                            counter--;
                                            (function k(counter) {
                                                res += "HAPPY MORNING";

                                            })(counter);
                                        })(counter);
                                    })(counter);
                                })(counter);
                            })(counter);
                        })(counter);
                    })(counter);
                })(counter);
            })(counter);
        })(counter);

    })(counter);

})(counter);
console.log(res);