var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useCallback, useEffect, useState } from "react";
var usePagination = function (_a) {
    var data = _a.data, page = _a.page, limit = _a.limit, sort = _a.sort, filters = _a.filters, _b = _a.isServerSide, isServerSide = _b === void 0 ? false : _b, fetchDataOnPagination = _a.fetchDataOnPagination;
    var _c = useState(page || 1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = useState([]), pageData = _d[0], setPageData = _d[1];
    var handleOnServerSideChangePage = useCallback(function (page, limit, totalPages, sort, filters) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (fetchDataOnPagination === null || fetchDataOnPagination === void 0 ? void 0 : fetchDataOnPagination(page, limit, sort, filters))];
                case 1:
                    res = _a.sent();
                    if (res.hasNextPage)
                        setTotalPages(totalPages);
                    setPageData(res.data);
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); }, [fetchDataOnPagination]);
    useEffect(function () {
        if (isServerSide) {
            setPageData([]);
            setIsLoading(true);
            handleOnServerSideChangePage(currentPage, limit || 1, currentPage + 1, sort, filters);
        }
        else {
            setPageData(limit
                ? data.slice((currentPage - 1) * limit, currentPage * limit)
                : data);
        }
    }, [
        currentPage,
        data,
        sort,
        filters,
        handleOnServerSideChangePage,
        isServerSide,
        limit,
    ]);
    var _e = useState(isServerSide), isLoading = _e[0], setIsLoading = _e[1];
    var pagination = limit ? true : false;
    var _f = useState(pagination ? Math.ceil(data.length / (limit || 1)) : 1), totalPages = _f[0], setTotalPages = _f[1];
    useEffect(function () {
        setTotalPages((pagination ? Math.ceil(data.length / (limit || 1)) : 1) || 1);
        if (currentPage > totalPages)
            setCurrentPage(totalPages);
    }, [currentPage, data, limit, pagination, totalPages]);
    var handleOnChangePage = function (page) {
        setCurrentPage(page);
    };
    return {
        pagination: pagination,
        page: currentPage,
        totalPages: totalPages,
        pageData: pageData,
        isLoading: isLoading,
        onChangePage: handleOnChangePage,
    };
};
export default usePagination;
//# sourceMappingURL=usePagination.js.map