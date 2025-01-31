#include<stdio.h>
int type_of_website(char a[]){
if(strlen(a , "Dynamic")==0){
    return 10;
}

else if(strlen(a , "Static")==0){
    return 7;
}

else if(strlen(a , "Bootstrap")==0){
    return 5;
}

else if(strlen(a , "Wordpress")==0){
    return 3;
}
else{
    printf("please select one  ");
}
}

int domain(char a[]){
    char * name_of_domain[] = {".in" , ".com" , ".net"  , ".pk"};
    int price_of_domain[] = { 4000 , 40000 , 400 , 40};
    for( int i = 0 ; i < arrlen(price_of_domain) ; i++){
        if( strcmp(name_of_domain[i] ,a ) == 0){
            return price_of_domain[i];
        }
    }
    return 0;
}

int additonal_function(char a[]){
    char * additonal_function[] = {"Payment Gateway", "Chat", "Social Login", "Maps", "Translation"};
    int price_of_function[] = { 1000 , 2000 , 3000 , 4000 , 5000};
    for( int i = 0 ; i < arrlen(price_of_function) ; i++){
        if( strcmp(additonal_function[i] ,a ) == 0){
            return price_of_function[i];
        }
    }
    return 0;
}

int server_cost( int a , char a_string[]){
    int server_load[] = { 50 , 500 , 5000 , 50000};
    int server_load_high[] = { 1000 , 10000 , 20000 , 30000};
    int server_load_low[] = { 500 , 5000 , 10000 , 15000};
    for( int i = 0 ; i < arrlen(server_load) ; i++){
        if( sever_load == a && strcmp(a_string , "ease")){
            return server_load_low[i];
        }

        else if( sever_load == a ){
            return server_load_high[i];
        }
        
    }
    return 0;
}

int calculate_final_price( char type_of_website_string[] , char ease_value[], char domain_string[] , char additional_function_string[]  , int server_load_value  ){
    return (domain(domain_string) + additional_function(additonal_function_string) + server_cost(server_load_value))*type_of_website(type_of_website_string , ease_value);
}


int main(){
printf("the total cost of making a website is " , calculate_final_price( "dynamic" , "ease" , ".in" , "social login" , 500));
}