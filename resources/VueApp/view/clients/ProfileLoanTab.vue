<template>
<div>
    <h4><i class="fa fa-money"></i>&nbsp;&nbsp;Account / Loan Detail</h4>
    <hr>
    <div class="row">
        <div class="col-sm-3">
            <ul class="nav nav-pills nav-stacked">
                <li class="active">
                    <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;10,000</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;10,000</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;10,000</a>
                </li>
                <li style="background:#dff0d8;">
                    <a href="#c22" data-toggle="collapse" data-parent="#ac4" class="collapsed" style="color:#3c763d;">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Apply New Loan
                    </a>
                    <div id="c22" class="panel-collapse collapse" style="height: 0px;">
                        <div class="panel-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum pariatur laudantium nisi quae commodi nihil officia reiciendis voluptatum placeat distinctio tempore incidunt quasi perspiciatis ducimus in at iure qui voluptatem animi delectus deleniti
                            adipisci facilis sapiente ad repellat excepturi.
                        </div>
                        <!-- /.panel-body -->
                    </div>
                </li>
            </ul>
        </div>
        <div class="col-sm-9">
            <table class="table table-hover table-nomargin table-colored-header table-striped">
                <thead>
                    <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th class="hidden-350">Platform(s)</th>
                        <th class="hidden-1024">Engine version</th>
                        <th class="hidden-480">CSS grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trident</td>
                        <td>
                            Internet Explorer 4.0
                        </td>
                        <td class="hidden-350">Win 95+</td>
                        <td class="hidden-1024">4</td>
                        <td class="hidden-480">X</td>
                    </tr>
                    <tr>
                        <td>Presto</td>
                        <td>Nokia N800</td>
                        <td class="hidden-350">N800</td>
                        <td class="hidden-1024">-</td>
                        <td class="hidden-480">A</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>NetFront 3.4</td>
                        <td class="hidden-350">Embedded devices</td>
                        <td class="hidden-1024">-</td>
                        <td class="hidden-480">A</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Dillo 0.8</td>
                        <td class="hidden-350">Embedded devices</td>
                        <td class="hidden-1024">-</td>
                        <td class="hidden-480">X</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Links</td>
                        <td class="hidden-350">Text only</td>
                        <td class="hidden-1024">-</td>
                        <td class="hidden-480">X</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Lynx</td>
                        <td class="hidden-350">Text only</td>
                        <td class="hidden-1024">-</td>
                        <td class="hidden-480">X</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'profile-loan-tab',
  	data(){
        return { }
    },
}
</script>