import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import Loader from './Loader';
import { ChartProps } from '../models/models';


const Chart = ({ products,categories,selectedProducts,runReportEnabled,loading,selectedCategory }: ChartProps) => {

  console.log(selectedProducts);
  console.log(products);

  let titleArray;
  let priceArray;
  if(selectedProducts.length==0){
    titleArray = products.map((item:any)=>item.title)
    priceArray = products.map((item:any)=>item.price)
  }

  else{
   titleArray = selectedProducts.map((selectedTitle:any) => {
    const selectedProduct = products.find((product:any) => product.title === selectedTitle);
    return selectedProduct ? selectedProduct.title : '';
  });

   priceArray = selectedProducts.map((selectedTitle:any) => {
    const selectedProduct = products.find((product:any) => product.title === selectedTitle);
    return selectedProduct ? selectedProduct.price : '';
  });
  }
  console.log(titleArray, priceArray);

  let chartComponent;

  if(loading){
    return (<Loader/>)
  }
  if (categories && products.length > 0 && runReportEnabled) {
    chartComponent = (
      <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                // contextButton: {
                //   menuItems: []
                // },
                type: 'column'
              },
              title: {
                text: 'Products in selected Category',
                align:'left'
              },
              xAxis: {
                categories: titleArray,
                title: {
                  text: 'Products'
                }
              },
              yAxis: {
                title: {
                  text: selectedCategory
                }
              },
              plotOptions: {
                column: {
                  maxPointWidth: 50, 
                },
              },
              series: [{
                name: 'Price',
                data: priceArray,
                dataLabels: {
                  enabled: true,
                  color: '#000000',
                  style: {
                    textOutline: 'none'
                  },
                  formatter: function() {
                    return this.y + '$';
                  }
                }
              }]
            }}
          />
      </div>
    );
  }
  else {
    const pieChartData = categories.map((category:any) => ({
      name: category,
      y: 1,
    }));

    const pieChartOptions = {
      chart: {
        type: "pie",
      },
      title: {
        text: "Category Distribution",
      },
      series: [
        {
          name: "Categories",
          data: pieChartData,
        },
      ],
    };

    chartComponent = (
      <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
    );
  }

  return <div style={{ height: "400px", width:"100%" }}>{chartComponent}</div>;
};

export default Chart;