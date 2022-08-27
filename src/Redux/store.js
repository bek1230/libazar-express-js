import classReducer from "./Reducers/openClassSidebar";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tokenReducer from "./Reducers/Token/TokenReducer";
import activemenuReducer from "./Reducers/Sidebar/activemenu";
import langReducer from "./Reducers/Lang/langReducer";
import stepregReducer from "./Reducers/StepReg/StepReg";
import IsLegalReducer from "./Reducers/IsLegal/IsLegal";
import modaldocReducer from "./Reducers/Modal/modaldoc";
import openReducer from "./Reducers/MenuOpen/MenuOpen";
import fileReducer from "./Reducers/Document/document";
import modalpayReducer from "./Reducers/Modal/modalpay";
import profilSlide from "./Reducers/Profil/profilSlice";
import modalpaydelReducer from "./Reducers/Modal/modalpaydel";
import userReducer from "./Reducers/User/user";
import emailReducer from "./Reducers/Email/email";
import modalapplicReducer from "./Reducers/Modal/modalapplic";
import activelanding from "./Reducers/LandingActive/activelanding";
import filterReducer from "./Reducers/filter";
import openCategoryReducer from "./Reducers/openCategory";
import fowaridReducer from "./Reducers/fowarid";
export const store = configureStore({
  reducer: {
    class: classReducer,
    fowarid: fowaridReducer,
    token: tokenReducer,
    activemenu: activemenuReducer,
    langReducer: langReducer,
    open: openReducer,
    profile: profilSlide,
    user: userReducer,
    activelanding: activelanding,
    openCategory: openCategoryReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
