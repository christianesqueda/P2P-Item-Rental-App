<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col-md-6 text-center mx-5">
          <div class="form-group mt-4">
            <label for="category"><strong> Category </strong></label>
            <select name="category" id="category" class="form-control">
              <option value="" selected disabled
                >- Please Select an Option -</option
              >
              <option value="audioEquip">Audio Equipment</option>
              <option value="videoEquip">Video Equipment</option>
              <option value="sports">Sports</option>
              <option value="partyEvents">Party and Events</option>
              <option value="homeGarden">Home and Garden</option>
              <option value="office">Office</option>
              <option value="electronics">Electronics</option>
              <option value="instruments">Instruments</option>
            </select>
          </div>
          <div class="form-group mt-4">
            <label for="listingName"><strong>Item Name</strong></label>
            <br />
            <input
              type="text"
              name="listingName"
              placeholder="e.g. Karaoke Machine"
              size="40"
              class="form-control"
            />
          </div>
          <div class="form-group mt-4">
            <label for="description"><strong>Description</strong></label>
            <input
              type="textarea"
              class="form-control"
              name="description"
              placeholder="e.g. A karaoke machine is perfect for social ocassions."
              size='40'
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddListing",
};
</script>

<style scoped>

</style>
