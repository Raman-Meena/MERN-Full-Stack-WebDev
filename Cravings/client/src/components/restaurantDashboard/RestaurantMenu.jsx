import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import AddMenuItemModal from "./modals/AddMenuItemModal";
import EditMenuItemModal from "./modals/EditMenuItemModal";

const RestaurantMenu = () => {
  const { user } = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  // Fetch menu items
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/restaurant/menu/${user?.restaurantId}`);
      const items = res.data.data || [];
      setMenuItems(items);

      // Extract unique categories
      const uniqueCategories = ["All", ...new Set(items.map((item) => item.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load menu items");
    } finally {
      setLoading(false);
    }
  };

  const handleAddMenuItem = async (newItem) => {
    try {
      const res = await api.post(`/restaurant/menu`, {
        ...newItem,
        restaurantId: user?.restaurantId,
      });
      toast.success(res.data.message || "Menu item added successfully");
      setIsAddModalOpen(false);
      fetchMenuItems();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add menu item");
    }
  };

  const handleEditMenuItem = async (updatedItem) => {
    try {
      const res = await api.patch(
        `/restaurant/menu/${selectedItem._id}`,
        updatedItem
      );
      toast.success(res.data.message || "Menu item updated successfully");
      setIsEditModalOpen(false);
      setSelectedItem(null);
      fetchMenuItems();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update menu item");
    }
  };

  const handleDeleteMenuItem = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      try {
        const res = await api.delete(`/restaurant/menu/${itemId}`);
        toast.success(res.data.message || "Menu item deleted successfully");
        fetchMenuItems();
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to delete menu item");
      }
    }
  };

  const filteredItems =
    filterCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filterCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-gray-600">Loading menu items...</div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto space-y-6">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Menu Management</h1>
          <button
            onClick={() => {
              setSelectedItem(null);
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            <FaPlus /> Add New Item
          </button>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-lg transition ${
                  filterCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {filterCategory === "All"
                  ? "No menu items yet. Add your first item!"
                  : `No items in ${filterCategory} category`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {/* Item Image */}
                  {item.image?.url && (
                    <img
                      src={item.image.url}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                  )}

                  {/* Item Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Category and Price */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Status and Rating */}
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <span
                        className={`px-2 py-1 rounded ${
                          item.isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.isAvailable ? "Available" : "Unavailable"}
                      </span>
                      {item.rating && (
                        <span className="text-yellow-500 font-semibold">
                          ⭐ {item.rating}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedItem(item);
                          setIsEditModalOpen(true);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded transition"
                      >
                        <FaEdit size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMenuItem(item._id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded transition"
                      >
                        <FaTrash size={14} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        {menuItems.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-gray-600 text-sm">Total Items</p>
              <p className="text-2xl font-bold text-blue-600">{menuItems.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-gray-600 text-sm">Available</p>
              <p className="text-2xl font-bold text-green-600">
                {menuItems.filter((item) => item.isAvailable).length}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <p className="text-gray-600 text-sm">Categories</p>
              <p className="text-2xl font-bold text-purple-600">
                {categories.length - 1}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {isAddModalOpen && (
        <AddMenuItemModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddMenuItem}
        />
      )}

      {isEditModalOpen && selectedItem && (
        <EditMenuItemModal
          item={selectedItem}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedItem(null);
          }}
          onUpdate={handleEditMenuItem}
        />
      )}
    </>
  );
};

export default RestaurantMenu;