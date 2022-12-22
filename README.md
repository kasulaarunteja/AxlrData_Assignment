# AxlrData_Assignment


Figma link :
https://www.figma.com/file/hyo9Rc4jr2U5XMeiCj0Vtq/Test?node-id=0%3A1&t=8mcYfVxKWHlXc
UQb-0
1. Create one react app and follow the figma link and try to create the below
Screens by using bootstrap or material UI.
1. Login page
2. Filters page
3. Location page
2. Try to Invoke below api's by using Redux.
1. Login api
2. Categories api
3. Products api
Functional expectation :-
1. Login page form validation.
2. Once we get success/failure response, the login api needs to show a toast message
and if we get success message need to show filter page otherwise redirect to login
page.
3. Integrate Categories and Products api and do the error handling for all the api's.
4. Load more functionality for products.
5. Based on starting and ending points need to show the distance between the points.
6. Logout functionality and with out login need to redirect to login page
Api's :-
● Login api https://api.earthsfresh.in/api/users/userLogin
Request data :-
Method : POST
Headers: {
"content_type": "application / json",
"session_id ": 45
}
Body : {
"user_email": "test@test.com",
"user_password": "Test@123"
}
Response :-
{
"result": {
"status": true,
"statusCode": 200,
"message": "User Login Successfully",
"user_details": {
"user_id": 85,
"user_name": "TEST",
"user_mobile": null,
"user_email": "test@axlr.com",
"token":
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVEVTVCIsImlh
dCI6MTY3MTAwNDc1NiwiZXhwIjoxNzIyODQ0NzU2LCJpc3MiOiJodH
RwczovL2VhcnRoc2ZyZXNoLmNvbSJ9.7we6jneIjj3ucN8osy3PXyLuTy
MzF6-oN8NZEcXRDpw"
}
}
}
● Get Categorylist api https://api.earthsfresh.in/api/categories/getCategorylist
Request data :-
Method : GET
Headers: {
"content_type": "application / json",
"session_id ": 45
}
Response :-
{
"result": {
"status": true,
"statusCode": 200,
"message": "Category List, Brands,Affiliates List,Fulfillment
partners",
"categories": [],
}
● Get Products https://api.earthsfresh.in/api/products/getcategoryProducts
Method : POST
Headers: {
"content_type": "application / json",
"session_id ": 45
}
Body : {
"category_slug": [
"flours"
],
"fulfillment_slug": [],
"sub_cat_slug": [],
"brand_names": [],
"afiliate_names": [],
"limit": 8,
"page_no": 0,
"user_id": "",
"sorting_type": "DESC"
}
Response :-
{
"result": {
"status": true,
"statusCode": 200,
"message": "Products for your selection found",
"product_list": [],
"totalProducts": 0,
}