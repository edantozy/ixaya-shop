export interface OrdersResponse {
    status:   number;
    response: Order[];
}

export interface Order {
    id:          string;
    user_id:     string;
    phone:       string;
    address:     string;
    city:        string;
    state:       string;
    street_name: string;
    zip_code:    string;
    discount:    string;
    subtotal:    string;
    total:       string;
    order_code:  string;
    paid:        string;
    enabled:     string;
    create_date: CreateDate;
    last_update: string;
    products:    { [key: string]: string }[];
}

export enum CreateDate {
    The00000000000000 = "0000-00-00 00:00:00",
}
